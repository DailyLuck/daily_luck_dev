import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

import Slider from './SalarySlider';
import Calendar from './Calendar';

const ContactInput = (props) => {
  const { year, month, date, hour, minute,
  dispatch, showCalendar, submitSelectedTime,
  timeSelectStatus } = props;

  const cnWeekDay = ['日', '一', '二', '三', '四', '五', '六'];

  const  selectedInterviewTime = submitSelectedTime 
  ? `${year}年${month}月${date.date()}日 
  星期${cnWeekDay[date.day()]} ${hour} 點 ${minute} 分`
  : '點擊以選擇時間';

  const handleShowCalendar = () => {
     const status = !showCalendar;
     dispatch(actions.handleCalendar(status));
  }

	return (
		<div className="contact_input">
          <form>
           <div className="contact_input_block">
             <label>*您的公司名稱與所需職位</label>
             <div className="contact_input_block_content">
               <i className="fa fa-university" aria-hidden="true"></i> 
               <input type="text" placeholder="輸入您的公司名稱"/>
             </div>
             <div className="contact_input_block_content">
               <i className="fa fa-user-circle-o" aria-hidden="true"></i>
               <input type="text" placeholder="輸入您所需求之職位" />
             </div>
           </div>

           <div className="contact_input_block">
             <label>*創建用於此網頁之帳號<br/>(用以查看或編輯您的留言)</label>
             <div className="contact_input_block_content">
               <i className="fa fa-envelope-o" aria-hidden="true"></i>
               <input type="text" name="name" placeholder="輸入您的e-mail作為帳號" />
             </div>
             <div className="contact_input_block_content">
               <i className="fa fa-lock" aria-hidden="true"></i>
               <input type="text" name="name" placeholder="創建密碼" />
             </div>
           </div>
           <div className="contact_input_block">
             <label>*您方便的面試時間與預計的薪水區間</label>
             <div onClick={handleShowCalendar} 
               className="contact_input_block_interview-date">
               <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
               {selectedInterviewTime}
             </div>
             {showCalendar && 
              <Calendar
                year={year}
                month={month}
                date={date}
                timeSelectStatus={timeSelectStatus}
                showCalendar={showCalendar}                   
              />}
             <div className="contact_input_block_salary-budget">
               <Slider
                   minValue={40000}
                   maxValue={60000}
                   lowerValue={45000}
                   upperValue={48000}
               />
             </div>
           </div>
            <div className="contact_input_submit">
              <input type="submit" value="確認送出" />
            </div>
         </form>
        </div>
	);
}
export default connect((state) => {
  return {
    year: state.calendar.year,
    month: state.calendar.month,
    date: state.calendar.date,
    hour: state.calendar.hour,
    minute: state.calendar.minute,
    timeSelectStatus: state.calendar.timeSelectStatus,
    showCalendar: state.calendar.showCalendar,
    submitSelectedTime: state.calendar.submitSelectedTime,
  }
})(ContactInput);
