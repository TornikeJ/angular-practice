export class UserInfo {

    private _birthday;

    set birthday(value: any[]) {
        const arr = [...value];
        this._birthday = arr.join('/');
    }

    get birthday() {
        return this._birthday;
    }

    constructor(
        private firstName: string,
        private lastName: string,
        private birthdayDay: number,
        private birthdayMonth: string,
        private birthdayYear: number,
        private country: string,
        private aboutMe?: string
    ) {
        this.birthday = [birthdayDay, birthdayMonth, birthdayYear];
    }
}