const INTIAL_STATE = {
    stickers:[
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
        {
            title: "Sticker Title 1",
            desc: "Sticker Description goes here 1" 

        },
    ],
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