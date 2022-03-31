const INTIAL_STATE = {
    users: [ 
        {
            state: "Karachi",
            email: "baloch@gmail.com",
            phone: "telenor"
        },
        {
            state: "Lahore",
            email: "lahore@gmail.com",
            phone: "jazz"
        }
    ]
}

const reducer = (state = INTIAL_STATE) => state
export default reducer;