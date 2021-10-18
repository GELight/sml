import TypeException from "./TypeException";

export const NULLABLE = "NULLABLE";
export const NULLABLE_VALUE = "NULLABLE_VALUE";

export class TypeGuard {

    public static assureBoolean(param: boolean, options: string[] = []): boolean {

        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (typeof param !== "boolean") {
            throw new TypeException(`The argument of the type '${typeof param}' must be a 'boolean'`);
        }

        return param;
    }

    public static assureString(param: string, options: string[] = []): string {

        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (typeof param !== "string") {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'string'`);
        }

        return param;
    }

    public static assureNumber(param: number, options: string[] = []): number {

        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (!Number.isInteger(param)) {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'number'`);
        }

        return param;
    }

    
    public static assureArray(param: any[], options: string[] = []): any[] {

        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (!Array.isArray(param)) {
            throw new TypeException(`The argument type must be an 'array'`);
        }

        return param;
    }
    
    public static assureStringArray(param: string[], options: string[] = []): string[] {

        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (Array.isArray(param)) {
            for (const item of param) {
                if (options.includes(NULLABLE_VALUE)) {
                    TypeGuard.assureString(item, [NULLABLE]);
                } else {
                    TypeGuard.assureString(item);
                }
            }
        } else {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'string array'`);
        }

        return param;
    }

    public static assureNumberArray(param: number[], options: string[] = []): number[] {

        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (Array.isArray(param)) {
            for (const item of param) {
                if (options.includes(NULLABLE_VALUE)) {
                    TypeGuard.assureNumber(item, [NULLABLE]);
                } else {
                    TypeGuard.assureNumber(item);
                }
            }
        } else {
            throw new TypeException(`The argument of the type '${typeof param}' must be an 'number array'`);
        }

        return param;
    }


    public static assureInstanceOf(param: any, obj: any, options: string[] = []): any {
        
        if (options.includes(NULLABLE) && param === null) {
            return param;
        }
        
        if (!(param instanceof obj)) {
            throw new TypeException(`The argument of the type '${typeof param}' must be an array of '${obj}'`);
        }
            
        return param;
    }

    public static assureArrayOfInstance(param: any, obj: any, options: string[] = []): any {
        
        if (options.includes(NULLABLE) && param === null) {
            return param;
        }

        if (Array.isArray(param)) {
            for (const item of param) {
                if (options.includes(NULLABLE_VALUE)) {
                    TypeGuard.assureInstanceOf(item, obj, [NULLABLE]);
                } else {
                    TypeGuard.assureInstanceOf(item, obj);
                }
            }
        } else {
            throw new TypeException(`The argument of the type '${typeof param}' must be an instance of ${obj}`);
        }
        
        return param;
    }

}
