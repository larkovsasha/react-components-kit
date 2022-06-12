import { Button } from 'ui-kit';


export default {title: "Button"}
export const stories = () => (
  <div>
    <div className='story'>
      <label>Button</label>
      <Button>send</Button>
    </div>

    <div className='story'>
      <label>Button disabled</label>
      <Button isDisabled>disabled</Button>
    </div>
  </div>
)