import React, { useState } from 'react'
import styled from 'styled-components'
import {CalendarToday, LocationOn} from '@mui/icons-material';
import {Button, Grid, TextField} from '@mui/material'

import {Band} from './types/Band'
import {TicketType} from './types/TicketType'
import TicketInput from './TicketInput';

interface Props{
  band: Band
}

const BandForm = (props: Props): React.JSX.Element  => {
  const {band} = props
  const eventDate: string = new Date(band.date).toLocaleDateString()
  const [totalPrice, setTotalPrice]: [number, (arg: number)=> void] = useState(0)
  const [firstName, setFirstName]: [string, (arg: string)=> void] = useState('')
  const [lastName, setLastName]: [string, (arg: string)=> void] = useState('')
  const [address, setAddress]: [string, (arg: string)=> void] = useState('')
  const [cardNumber, setCardNumber]: [string, (arg: string)=> void] = useState('')
  const [expiration, setExpiration]: [string, (arg: string)=> void] = useState('')
  const [cvv, setCvv]: [string, (arg: string)=> void] = useState('')

  const handleSubmit = () => {
    console.log(`Bought tickets for $${totalPrice / 100}`)
    // this is where we would call the back end to submit the form
  }

  return (
    <BandFormDiv>
      <Grid container
        justifyContent='center'
        direction='row'
        spacing={2}
        className='band-form-grid'>
          <Grid item className='event-info' lg={12}>
            <h1>{band.name}</h1>
            <div className='event-date'>
              <CalendarToday/>
              <p>{eventDate}</p>
            </div>
            <div className='event-location'>
              <LocationOn/>
              <p>{band.location}</p>
            </div>
          </Grid>
          <Grid item className='band-info' lg={4} md={4} sm={12}>
            <div className='image-container'>
              <img src={band.imgUrl} alt={`Buy tickets for ${band.name}`}/>
            </div>
            <div className='description-container' dangerouslySetInnerHTML={{__html: band.description_blurb}}/>
          </Grid>
          <Grid item className='tickets' lg={8} md={8} sm={12}>
            <h2>Select Tickets</h2>
            {band.ticketTypes.map((ticketType: TicketType) => 
              <TicketInput ticket={ticketType} total={totalPrice} setTotal={setTotalPrice}
              key={band.id + ticketType.name}/>
            )}
            <div className='total-container'>
              <p className='total-label'>TOTAL</p>
              <p className='total-number'>${totalPrice / 100}</p>
            </div>
            <div className='payee-container'>
              <div className='name-container'>
                <TextField 
                  label='First Name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={(e) => {
                    setFirstName(e.target.value)
                  }}/>
                <TextField 
                  label='Last Name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={(e) => {
                    setLastName(e.target.value)
                  }}/>
              </div>
              <TextField 
                label='Address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                onBlur={(e) => {
                  setAddress(e.target.value)
                }}/>
            </div>
            <div className='card-container'>
              <p>Payment Details</p>
              <TextField 
                label='Card Number'
                value={cardNumber}
                type='tel'
                onChange={(e) => setCardNumber(e.target.value)}
                onBlur={(e) => {
                  setCardNumber(e.target.value)
                }}/>
              <div className='card-details-container'>
                <TextField 
                  label='MM/YY'
                  value={expiration}
                  type='tel'
                  onChange={(e) => setExpiration(e.target.value)}
                  onBlur={(e) => {
                    setExpiration(e.target.value)
                  }}/>
                <TextField 
                  label='CVV'
                  value={cvv}
                  type='tel'
                  onChange={(e) => setCvv(e.target.value)}
                  onBlur={(e) => {
                    setCvv(e.target.value)
                  }}/>
              </div>
            </div>
            <Button 
            className='form-submit-button'
            variant='contained'
            onClick={()=> handleSubmit()}>GET TICKETS</Button>
          </Grid>
      </Grid>
    </BandFormDiv>
  );
}

const BandFormDiv = styled.div`
  .band-form-grid {
    width: 100%;
    max-width: 1350px;
    padding: 50px 20px;
    margin: 0;
    .event-info {
      width: 100%;
      padding: 0 0 24px 0;
      h1 {
        margin: 0 0 16px 0;
      }
      .event-date, .event-location {
        display: flex;
        align-items: center;
        svg, p {
          margin: 0 8px 8px 0;
        }
      }
    }
    .band-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 20px 0 0;
      .image-container {
        border-radius: 3px;
        img {
          border-radius; 3px;
          width: 100%;
          max-width: 300px;
        }
      }
      .description-container {
        margin: 24px 0;
      }
    }
    .tickets {
      padding: 10px 30px 30px 30px;
      background-color: #EEEEEE;
      border-radius: 3px;
      .total-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .total-label, .total-number {
          font-size: 24px;
        }
        .total-number {
          font-weight: bold;
        }
      }
      .payee-container, .card-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        .name-container, .card-details-container {
          width: 100%;
          display: flex;
          flex-direction: row;
          align-items: space-between;
          div {
            width: 100%;
            &:first-child {
              margin-right: 8px;
            }
          }
        }
        p {
          font-weight: bold;
        }
        .MuiInputBase-root {
          margin-bottom: 16px;
          background-color: #ffffff;
        }
      }
      .form-submit-button {
        width: 100%;
        border-radius: 3px;
      }
    }
  }
`

export default BandForm;