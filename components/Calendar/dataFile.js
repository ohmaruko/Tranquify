import moment from 'moment';
import Image from 'next/image';

// Days Attended to
export const dayList = [
  '2024-03-10',
  '2024-03-21',
  '2024-04-02',
  '2024-04-14',
  '2024-04-27',
  '2024-04-29',
  '2024-05-01',
  '2024-05-09'
];

// Add contents to corresponding day tiles
export const addContent = ({ date }) => {
  const contents = [];

  // if data corresponds to the dayList, add a icon/indicator
  if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
    contents.push(
      <>
        <div className="dot">
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 22 23" fill="none">
          <circle cx="11" cy="11.2222" r="11" fill="#F78B98"/>
          </svg>
        </div>
        {/* <Image
          src={<svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
          <circle cx="11" cy="11.2222" r="11" fill="#F78B98"/>
        </svg>}
          className="attendedImg"
          width="26"
          height="26"
          alt="Attended"
        /> */}
      </>
    );
  }
  return <div>{contents}</div>; // each day gets the corresponding info
};