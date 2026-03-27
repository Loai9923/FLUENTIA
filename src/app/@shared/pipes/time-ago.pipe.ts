import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment";

@Pipe({
    name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
    transform(timestamp: number | Date): string {
        if (!timestamp) return '';
        return moment(timestamp).fromNow();
    }
}