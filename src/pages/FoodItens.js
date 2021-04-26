import React, { useState } from 'react';
import style from './styles/food.module.css'
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import axios from 'axios';
import CurrencyInput from 'react-currency-masked-input'

function FoodItens() {
  const [PreImage, setPreImage] = useState(null);
  const [Progress, setProgress] = useState(0);
  const [Name, setItemName] = useState(null);
  const [Price, setPrice] = useState(null);
  const [ImageUrl, setImageUrl] = useState(null);
  const [uuid, setUuid] = useState('6085ff2e7cfd024d10581588');
  const [result, setResult] = useState(null);
  const [resultErr, setResultErr] = useState(null);
  const refName = React.createRef();


  const handlerCreateItem = async () => {
    setResult('')
    if (Name === '' || Name === null) {
      setResultErr('Preencha o campo nome.');
    } else if (Price == '' || Price === null) {
      setResultErr('Preencha o campo Preço.');
    } else if (PreImage === '' || PreImage === null) {
      setResultErr('Selecione um arquivo.');
    } else {
      const data = new FormData();
      data.append('image', PreImage)
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor(loaded * 100 / total);
          setProgress(percent)

        },
        headers: {
          'Authorization': 'Client-ID ce76a911cc08201'
        }
      }
      if (PreImage) {
        await axios.post('https://api.imgur.com/3/image', data, options, {

        }).then((response) => {
          const { data } = response.data;
          axios.post('http://localhost:3333/item/add', {
            itemName: Name,
            itemPrice: parseInt(Price),
            itemUrl: data.link
          }, {
            headers: {
              uid: uuid
            }
          }).then((response) => {
            setResultErr('')
            setResult('Produto Cadastrado com sucésso!')
            console.log(response)
          }).catch((error) => {
            console.log(error)
          })

        }).catch((error) => { console.log(error); })
      }
    }

  }

  function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="initial">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return <div className={style.container}>
    <h3>Cadastrar Item:</h3>
    <div className={style.formfood}>
      <div className={style.inputs}>
        <div className={style.inputGroup}>
          <label htmlFor="itemName">Nome:</label>
          <input type="text" name="itemName" ref={refName} id="itemName" placeholder="Nome do Item" className={style.inputName} onChange={event => setItemName(event.target.value)} />
        </div>
        <div className={style.inputGroup}>
          <label htmlFor="ItemPrice">Preço:</label>
          <CurrencyInput separator="," type="text" name="itemPrice" id="itemPrice" placeholder="Preço" className={style.inputPrice} onChange={event => setPrice(event.target.value)} />
        </div>
        <div style={{ textAlign: "center", color: `${result ? '#39ff14' : '#ff0000'}`, marginTop: '15px' }} >{result}{resultErr}</div>
        <div className={style.buttons} >
          <button onClick={handlerCreateItem} >Cadastrar</button>
          <button type="reset" >Limpar</button>
        </div>
      </div>
      <div className={style.fileINputs}>
        <input type="file" accept="image/png, image/jpeg" onChange={event => (setPreImage(event.target.files[0]))} />
        <div >
          <LinearProgressWithLabel value={Progress} />
        </div>
      </div>
    </div>
  </div>
}

export default FoodItens;