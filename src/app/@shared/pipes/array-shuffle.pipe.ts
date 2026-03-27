import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'arrayShuffle',
})
export class ArrayShufflePipe implements PipeTransform {
    transform(array: { [key: string]: unknown }[]): unknown[] {

        if (!array && !Array.isArray(array)) return array;

        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
        }

        return array;
    }
}