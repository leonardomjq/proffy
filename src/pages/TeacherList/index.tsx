import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="These are the available teachers">
        <form action="" id="search-teachers">
          <Select
            name="subject"
            label="Subject"
            options={[
              { value: 'Art', label: 'AArt' },
              { value: 'Biology', label: 'Biology' },
              { value: 'Science', label: 'Science' },
              { value: 'English', label: 'English' },
              { value: 'Geography', label: 'Geography' },
              { value: 'History', label: 'History' },
              { value: 'Math', label: 'Math' },
              { value: 'Literature', label: 'Literature' },
              { value: 'Chemistry', label: 'Chemistry' },
            ]}
          />
          <Select
            name="week_day"
            label="Week day"
            options={[
              { value: '0', label: 'Sunday' },
              { value: '1', label: 'Monday' },
              { value: '2', label: 'Tuesday' },
              { value: '3', label: 'Wednesday' },
              { value: '4', label: 'Thursday' },
              { value: '5', label: 'Friday' },
              { value: '6', label: 'Saturday' },
            ]}
          />
          <Input type="time" name="time" label="Hour" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
