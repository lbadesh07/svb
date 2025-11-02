import clientModel from '../Models/clientModel.js'


let storeClientsData = async (req,res) =>{
    const {name,email,phone,address,message} = req.body;

    if(!name || !email || !phone || !address || !message) return res.status(400).send({message:"Data not found",status:false})

    try {
        let client =   await clientModel.create({
            name,
            email,
            phone,
            address,
            message
        })

         res.status(200).send({message:"client request stored",status:true})
    } catch (error) {
        console.log(error)
         res.status(500).send({message:"client request not stored",status:false})
    }
}

export default storeClientsData;