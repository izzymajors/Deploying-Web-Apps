import react from 'react'
import Button from '@material-ui/core/Button'
import Route from 'react'

export default function SignUp (props){
   const { values, submit, update } = props

   const onChange= evt => {
       const {name, value} = evt.target

       update(name, value)
   }
   const onSubmit = evt => {
       evt.preventDefault();

       submit()
   }

   return (
    <Button href='/login' variant='contained' color='primary'>
    Sign up Now
    </Button>
    )
}