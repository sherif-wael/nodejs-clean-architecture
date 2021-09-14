class Customer{
    constructor(props){
        this.id = props._id;
        this.name = props.name;
        this.email = props.email;
        this.password = props.password;
        this.passwordChangedAt = props.passwordChangedAt;
        this.role = props.role;
        this.active = props.active;
        this.deleted = props.deleted;
        this.emailVerificationToken = props.emailVerificationToken;
        this.passwordResetToken = props.passwordResetToken;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this.name;
    }

    getEmail(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }

    hasPasswordChangedAfter(d){
        return this.passwordChangedAt.getTime() > d.getTime();
    }

    getRole(){
        return this.role;
    }

    isActive(){
        return this.active;
    }

    isDeleted(){
        return this.deleted;
    }
}