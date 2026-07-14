export const creatValidationSchema = {
    user_name: {
        notEmpty:{
            errorMessage: "Username should not be empty"
        },
        isLength: {
            options: {min:3, max:13},
            errorMessage: "Username should have a length of min 3 and max 13 characters"
        }
    },
    password:{
        notEmpty:{
            errorMessage: "Age should not be empty"
        },
    }
}