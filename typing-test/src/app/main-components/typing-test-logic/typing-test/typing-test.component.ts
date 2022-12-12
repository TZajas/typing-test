import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-typing-test',
  templateUrl: './typing-test.component.html',
  styleUrls: ['./typing-test.component.css']
})
export class TypingTestComponent implements OnChanges {

  @Input('selectedDiff') public selectedDiff: any;
  @Input('selectedTime') public selectedTime: any;
  public hardSentences: string[] = ["She had a habit of taking showers in lemonade.",
                                    "Warm beer on a cold day isn't my idea of fun.",
                                    "She opened up her third bottle of wine of the night.",
                                    "Improve your goldfish's physical fitness by getting him a bicycle.",
                                    "He played the game as if his life depended on it and the truth was that it did.",
                                    "There are no heroes in a punk rock band.",
                                    "He was the only member of the club who didn't like plum pudding.",
                                    "They got there early, and they got really good seats.",
                                    "Although it wasn't a pot of gold, Nancy was still enthralled at what she found at the end of the rainbow."
                                  ];

  public curSent: any;
  public curWord: any;
  public curChar: any;


  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.selectedDiff=="Hard"){
      this.curSent=this.hardSentences[2];
    }
  }



}
