import './index.css'

function Form(){
    return (
        <div id="bodybox">
            <div id="bodycontent">
                <div id="namewrapper">
                    <label htmlFor="name" id="namelabel">Name</label>
                    <input type="text" name="name" id="inputfield" maxLength="12"/>
                </div>

                <div id="datesetter">
                    <label htmlFor='date' id="selectdate">Select Birthdate</label>

                        <div id='calendarbutton'>
                        <input type="date" name="date" id="calendar"/>
                        </div>
                        
                </div>

                <div id = 'submit'>
                    <button id='button'>
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Form;