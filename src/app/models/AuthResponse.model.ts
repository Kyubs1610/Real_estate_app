export interface AuthResponse {

    fullname: string;
    id: number;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    isPasswordRequired: boolean;
    createdAt: string;
    updatedAt: string;
  }

  export interface  AuthResponseMail{
    message: string;
    info: {
      token: string;
    };
    reset: boolean;
  }