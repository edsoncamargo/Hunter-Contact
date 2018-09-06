export class Contact {
    private _email: string;
    private _subject: string;
    private _name: string;
    private _message: string;
    // private _phone: string;

    constructor(email: string, subject: string, name: string, message: string, /*phone: string*/) {
        this._email = email;
        this._subject = subject;
        this._name = name;
        this._message = message;
        // this._phone = phone;
    }

    /**
     * Getter email
     * @return {string}
     */
    public get email(): string {
        return this._email;
    }

    /**
     * Getter subject
     * @return {string}
     */
    public get subject(): string {
        return this._subject;
    }

    /**
     * Getter name
     * @return {string}
     */
    public get name(): string {
        return this._name;
    }

    /**
     * Getter message
     * @return {string}
     */
    public get message(): string {
        return this._message;
    }

    // /**
    //  * Getter phone
    //  * @return {string}
    //  */
    // public get phone(): string {
    //     return this._phone;
    // }

    /**
     * Setter email
     * @param {string} value
     */
    public set email(value: string) {
        this._email = value;
    }

    /**
     * Setter subject
     * @param {string} value
     */
    public set subject(value: string) {
        this._subject = value;
    }

    /**
     * Setter name
     * @param {string} value
     */
    public set name(value: string) {
        this._name = value;
    }

    /**
     * Setter message
     * @param {string} value
     */
    public set message(value: string) {
        this._message = value;
    }

    // /**
    //  * Setter phone
    //  * @param {string} value
    //  */
    // public set phone(value: string) {
    //     this._phone = value;
    // }


}