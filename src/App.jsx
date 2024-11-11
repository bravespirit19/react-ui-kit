import './App.css'
import Button from './components/Button/Button'
import Checkbox from './components/Checkbox/Checkbox'
import ColorPicker from './components/ColorPicker/ColorPicker'
import Dropdown from './components/Dropdown/Dropdown'
import InputField from './components/InputField/InputField'
import Link from './components/Link/Link'
import Modal from './components/Modal/Modal'
import SelectMenu from './components/SelectMenu/SelectMenu'
import Textarea from './components/Textarea/Textarea'
import Toast from './components/Toast/Toast'

function App() {
  return (
    <>
      <div className="container">
        <h1 className='component-title'>Button</h1>
        <section>
          <div className="buttons-with-titles">
            <h2 className="buttons-title">
              Primary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Primary with icon&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Secondary&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Secondary with icon</h2>
            <div className="buttons-wrap">
              <Button styleName='primary'>Button</Button>
              <Button styleName='primary' isBtnDisabled>Button</Button>

              <Button styleName='primary'>
                <img src="/button-icon.svg" alt="icon" />
                Button
              </Button>
              <Button styleName='primary' isBtnDisabled>
                <img src="/button-icon-gray.svg" alt="icon" />
                Button
              </Button>

              <Button styleName='secondary'>Button</Button>
              <Button styleName='secondary' isBtnDisabled>Button</Button>

              <Button styleName='secondary'>
                <img src="/secondary-btn-icon.svg" alt="icon" />
                Button
              </Button>
              <Button styleName='secondary' isBtnDisabled>
                <img src="/secondary-btn-disabled.svg" alt="icon" />
                Button
              </Button>
            </div>
          </div>
          
          <div className="buttons-status">
            <p>Default</p>
            <p>Disabled</p>
          </div>
        </section>

        <h1 className='component-title'>Link</h1>
        <section>
          <div className="links-wrap">
            <Link>Link</Link>
            <Link isLinkDisabled>Link</Link>
          </div>
          <div className="links-status">
            <p>Default</p>
            <p>Disabled</p>
          </div>
        </section>


        <h1 className='component-title'>InputFiled</h1>
        <section>
          <div className="inputs-wrap">
            <InputField title='Username*' placeholder='Enter your username' />
            <InputField title='Username*' placeholder='Enter your username' isInputDisabled />
            <InputField title='Username*' placeholder='Enter your username' isErrors />
            <InputField title='Password*' placeholder='Enter your password' type='password' />
            <InputField title='Password*' placeholder='Enter your password' type='password' isInputDisabled />
            <InputField title='Password*' placeholder='Enter your password' type='password' isErrors />
          </div>

          <div className="inputs-status">
            <p>Default</p>
            <p>Disabled</p>
            <p>Error</p>
          </div>
        </section>

        <h1 className='component-title'>Checkbox</h1>
        <section>
          <div className="checkboxes-wrap">
            <Checkbox />
          </div>
        </section>

        <section>
          <div className="checkboxes-wrap">
            <Checkbox>Text</Checkbox>
          </div>
        </section>

        <section>
          <div className="icons-wrap">
            <img src="/input-eye-closed.svg" alt="" />
            <img src="/input-eye-open.svg" alt="" />
            <img src="/arrow-right.svg" alt="" />
            <img src="/play.svg" alt="" />
            <img src="/pause.svg" alt="" />
            <img src="/tick.svg" alt="" />
            <img src="/plus.svg" alt="" />
            <img src="/minus.svg" alt="" />
            <img src="/user.svg" alt="" />
            <img src="/truck.svg" alt="" />
            <img src="/info.svg" alt="" />
            <img src="/arrow-up.svg" alt="" />
            <img src="/trash.svg" alt="" />
            <img src="/cart.svg" alt="" />
            <img src="/default.svg" alt="" />
            <img src="/google.svg" alt="" />
            <img src="/arrow-down.svg" alt="" />
            <img src="/arrow-left.svg" alt="" />
            <img src="/logout.svg" alt="" />
            <img src="/checkbox.svg" alt="" />
            <img src="/checkbox-checked-gray.svg" alt="" />
            <img src="/edit.svg" alt="" />
            <img src="/delete.svg" alt="" />
            <img src="/color.svg" alt="" />
            <img src="/color-selected.svg" alt="" />
            <img src="/down-small.svg" alt="" />
            <img src="/close.svg" alt="" />
          </div>
        </section>

        <h1 className='component-title'>Modal</h1>
        <section style={{ marginBottom: '50px' }}>
          <Modal title='Title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Modal>
        </section>

        <h1 className='component-title'>SelectMenu</h1>
        <section>
          <div className="select-wrap">
            <SelectMenu title='Time' options={['11:30 pm', '11:45 pm', '12:00 pm', '12:15 pm', '12:30 pm', '12:45 pm', '13:00 pm', '13:15 pm']} />
          </div>
        </section>

        <h1 className='component-title'>Textarea</h1>
        <section>
          <div style={{ marginBottom: '50px' }}>
            <Textarea title='Description'>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</Textarea>
          </div>
        </section>


        <h1 className='component-title'>Toast</h1>
        <section>
          <div style={{ marginBottom: '50px' }}>
            <Toast />
          </div>
        </section>

        <h1 className='component-title'>Dropdown</h1>
        <section style={{ marginBottom: '50px' }}>
          <div className="dropdown-wrap">
            <Dropdown options={['Week', 'Day']} />
          </div>
        </section>

        <h1 className='component-title'>ColorPicker</h1>
        <section>
          <div className="color-picker-wrap">
            <ColorPicker />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
