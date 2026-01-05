import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

@Injectable()
export class QuestionsService {

  private riddles = [
    {
      "id": 1,
      "riddle": "Soy el ciervo más pequeño del mundo y habito en el sur de Chile. ¿Qué animal soy?",
      "answer": "pudu"
    },
    {
      "id": 2,
      "riddle": "Vivo en el mar de Chile, tengo bigotes y me gusta tomar sol en las rocas. ¿Qué animal soy?",
      "answer": "lobo marino"
    },
    {
      "id": 3,
      "riddle": "Soy un ave chilena de color negro con una mancha roja en el pecho y mi canto anuncia la lluvia. ¿Qué animal soy?",
      "answer": "loica"
    },
    {
      "id": 4,
      "riddle": "Soy un animal que corre muy rápido, no puedo volar y vivo en el sur de Chile. ¿Qué animal soy?",
      "answer": "ñandu"
    },
    {
      "id": 5,
      "riddle": "Vivo en los bosques de Chile, tengo una cola muy peluda y me alimento de frutos y pequeños animales. ¿Qué animal soy?",
      "answer": "zorro"
    }
  ]


  create(createQuestionDto: CreateQuestionDto) {
    const newRiddle = {
      id: this.riddles.length + 1,
      riddle: createQuestionDto.riddle,
      answer: createQuestionDto.answer,
    };
    this.riddles.push(newRiddle);
    return newRiddle;
  }

  findAll() {
    //return `This action returns all questions`;
    return this.riddles;
  }

  findOne(id: number) {
    //return this.riddles[id-1];
    /*const riddle = this.riddles[id-1];
    if (!riddle) {
      throw new NotFoundException(`Riddle with id ${id} not found`);
    }
    return riddle;*/
    const riddle = this.riddles.find(riddle => riddle.id === id); // If not found, riddle is undefined
    if (!riddle) { // Check for undefined
      throw new NotFoundException(`Riddle with id ${id} not found`);
    }
    return riddle;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    const index = this.riddles.findIndex(r => r.id === id);
    if (index === -1) {
      throw new NotFoundException(`Riddle with id ${id} not found`);
    }
    this.riddles.splice(index, 1);
    return { message: `Riddle with id ${id} removed successfully` };
    }
}
