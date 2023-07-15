import { Button, Grid, TextField } from "@mui/material";
import styled from 'styled-components'
import { useState } from "react";
import { TicketType } from "./types/TicketType";
import {ExpandLess, ExpandMore, SettingsOverscanOutlined} from '@mui/icons-material';

interface Props {
  ticket: TicketType
  total: number
  setTotal: (arg: number) => void
}

const TicketInput = (props: Props) => {
  const {ticket, total} = props
  const [purchaseNumber, setPurchaseNumber]: [number, (arg: number)=> void] = useState(0)

  return (
    <TicketInfoDiv>
      <Grid 
        container 
        direction='row'>
        <Grid item lg={8} md={8} sm={8} xs={6} className='ticket-type-info'>
          <p className='ticket-name'>{ticket.name}</p>
          <p className='ticket-description'>{ticket.description}</p>
          <p className='ticket-name'>{`$${ticket.cost/100}`}</p>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={6} className='input-container'>
          <TextField 
            className='ticket-number-input'
            type='tel'
            value={purchaseNumber}/>
            <div className='buttons-container'>
              <Button 
                variant="contained" 
                onClick={() => {
                  setPurchaseNumber(purchaseNumber + 1)
                  props.setTotal(total + ticket.cost)
                }}>
                  <ExpandLess/>
              </Button>
              <Button 
                variant="contained" 
                onClick={() => {
                  purchaseNumber > 0 && setPurchaseNumber(purchaseNumber - 1)
                  purchaseNumber > 0 && props.setTotal(total - ticket.cost)
                }}>
                  <ExpandMore/>
              </Button>
            </div>
        </Grid>
      </Grid>
    </TicketInfoDiv>
  )


}

const TicketInfoDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #CCCCCC;
  margin-bottom: 24px;
  .ticket-type-info {
    padding-right: 24px;
    p.ticket-name {
      font-size: 20px;
    }
    p.ticket-description {
      font-size: 14px;
    }
  }
  .input-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .ticket-number-input, .MuiInputBase-root {
      height: 72px;
      max-width: 100px;
      border-radius: 3px 0 0 3px;
      background-color: #FFFFFF;
    }
    .buttons-container {
      display: flex;
      flex-direction: column;
      button {
        box-shadow: none;
        &:first-child {
          border-radius: 0 3px 0 0;
        }
        &:last-child {
          border-radius: 0 0 3px 0;
        }
      }
    }
  }
`

export default TicketInput