import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterArray',
    pure: false
})
export class FilterArrayPipe implements PipeTransform {
    transform(items: { [key: string]: unknown }[], property: string, filterValue: unknown): unknown[] {
        if (!items) return [];
        return items.filter(item => item[property] === filterValue);
    }
}