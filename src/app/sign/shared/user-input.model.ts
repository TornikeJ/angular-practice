export class UserInput {


    get birthday() {
        return new Date(this.birthdayYear, this.birthdayMonth, this.birthdayDay);
    }


    constructor(
        public firstName: string,
        public lastName: string,
        private birthdayDay: number,
        private birthdayMonth: number,
        private birthdayYear: number,
        public country: string,
        public aboutMe?: string
    ) { }
}