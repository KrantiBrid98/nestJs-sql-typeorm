import { PipeTransform, ArgumentMetadata, HttpException } from "@nestjs/common";

export class MandatoryFieldsPipe implements PipeTransform {
    constructor(private fields){}

    transform(value: any, metadata: ArgumentMetadata) {
        const missingFields = [];
        this.fields.forEach(field => {
            if(!value[field])
                missingFields.push(field);
        })

        if(missingFields.length > 0)
            throw new HttpException(`payload should have ${missingFields.join(', ')} fields`, 404)
        
        return value;
    }

}