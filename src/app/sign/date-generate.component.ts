export class DateGenerateComponent {
    days =
        [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16',
            '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'
        ];

    months =
        [
            'January', 'February', 'March', 'April', 'May', 'June', 'July',
            'August', 'September', 'Octomber', 'November', 'December'
        ];

    years = [];

    constructor() {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear - 120;

        for (let i = currentYear; i >= startYear; i--) {
            this.years.push(i);
        }
    }
}