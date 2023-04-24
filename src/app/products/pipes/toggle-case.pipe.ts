import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'toggleCase'
})
export class TogglecasePipe implements PipeTransform{
    transform(value: string) {
        return value.toUpperCase();
    }

}