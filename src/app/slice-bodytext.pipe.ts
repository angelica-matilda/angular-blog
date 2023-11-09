// pipe to slice the body-text without cutting the words

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords'
})
export class SliceWordsPipe implements PipeTransform {
  transform(value: string, words: number): string {
    if (!value) return '';

    const wordArray = value.split(' ');
    const slicedArray = wordArray.slice(0, words);

    return slicedArray.join(' ');
  }
}
