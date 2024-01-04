const axios = require('axios');
const Crypto = require('crypto')

module.exports = {
  async index(req,res) {
  try {
    const { data } = await axios.get(`${process.env.BASE_API_URL}/registrations`);
    return res.json(data);
  } catch (error) {
    return res.json(data, 500);  
  }
  },
  async store(req,res){
    const body = req.body;
    const id = Crypto
      .randomBytes(5)
      .toString('base64')
      .slice(0, 5)
    
    const payload = {
      id,
      ...body["step-one"],
      ...body["step-two_pessoa_fisica"],
      ...body["step-two_pessoa_juridica"],
      ...body["step-three"]
    }

    const { status } = await axios.post(`${process.env.BASE_API_URL}/registrations`, payload);
    
    return res.json(payload, status);
  },
}