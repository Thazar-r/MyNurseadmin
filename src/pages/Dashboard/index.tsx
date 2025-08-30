import { useEffect } from 'react';
import Calendar from 'color-calendar';
import Typography from '@components/Typography';
import DownloadIcon from '@components/DownloadIcon';
import SearchInput from '@/components/SearchInput';
import WeeklyVisitsChart from './WeeklyVisitsChart';
import { useTypedDispatch, useTypedSelector } from '@hooks/redux';
import { formatNumber, type Style } from '@utils/numbers';
import { dashboardSelector } from '@store/dashboard/selectors';
import {
  fetchTotalNurses,
  fetchTotalPatients,
  fetchTotalRevenue,
} from '@store/dashboard/actions';

const opts = { style: 'decimal' as Style };

function Dashboard(): React.JSX.Element {
  const dispatch = useTypedDispatch();
  const {
    totalNurses,
    totalRevenue,
    totalPatients,
  } = useTypedSelector(dashboardSelector);

  useEffect((): void => {
    dispatch(fetchTotalNurses());
    dispatch(fetchTotalRevenue());
    dispatch(fetchTotalPatients());

    new Calendar({
      id: '#dashboard-calendar',
      weekdayDisplayType: 'long-upper',
      borderRadius: '12px',
      dropShadow: '0px 4px 3px 0px rgba(0, 0, 0, 0.1)',
      calendarSize: 'small',
      fontFamilyBody: 'Poppins',
      fontFamilyHeader: 'Poppins',
      fontFamilyWeekdays: 'Poppins',
    });
  }, []);
  
  return (
    <section>
      <SearchInput className="w-75/100 mb-5 mx-auto" />
      <Typography
        variant="h2"
        weight="semiBold"
        color="secondaryHeading"
      >
        Dashboard
      </Typography>
      <div className="flex flex-wrap sm:flex-row flex-col gap-6 py-8">
        <div className="rounded-2xl bg-white px-4 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full md:w-48/100 xl:w-23/100">
          <Typography
            variant="p"
            weight="medium"
            className="text-xl"
          >
            Total Patients
          </Typography>
          <Typography
            variant="span"
            weight="medium"
            color="tertiary"
            className="text-[15px]"
          >
            {totalPatients.data ? formatNumber(totalPatients.data, opts) : '-'}
          </Typography>
        </div>
        <div className="rounded-2xl bg-white px-4 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full md:w-48/100 xl:w-23/100">
          <Typography
            variant="p"
            weight="medium"
            className="text-xl"
          >
            Total Nurses
          </Typography>
          <Typography
            variant="span"
            weight="medium"
            color="tertiary"
            className="text-[15px]"
          >
            {totalNurses.data ? formatNumber(totalNurses.data, opts) : '-'}
          </Typography>
        </div>
        <div className="rounded-2xl bg-white px-4 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full md:w-48/100 xl:w-23/100">
          <Typography
            variant="p"
            weight="medium"
            className="text-xl"
          >
            Transaction Amount
          </Typography>
          <Typography
            variant="span"
            weight="medium"
            color="tertiary"
            className="text-[15px]"
          >
            0
          </Typography>
        </div>
        <div className="rounded-2xl bg-white px-4 py-5 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.1)] w-full md:w-48/100 xl:w-23/100">
          <Typography
            variant="p"
            weight="medium"
            className="text-xl"
          >
            Revenue
          </Typography>
          <Typography
            variant="span"
            weight="medium"
            color="tertiary"
            className="text-[15px]"
          >
            {totalRevenue.data ? formatNumber(totalRevenue.data) : '-'}
          </Typography>
        </div>
      </div>
      <div className="flex flex-col items-center md:items-start md:flex-row flex-wrap md:flex-nowrap gap-10 mt-8">
        <div className="rounded-xl w-full md:w-65/100 xl:w-7/10 bg-white px-6 pt-7 pb-3 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04)]">
          <div className="flex justify-between">
            <div>
              <Typography
                variant="h3"
                weight="strong"
                color="tertiaryHeading"
              >
                Weekly Visits
              </Typography>
              <Typography
                variant="span"
                className="text-neutral-550 font-barlow"
              >
                Number of users with appointments
              </Typography>
            </div>
            <div>
              <button className="text-[#1A9C9A] flex items-center px-4 py-2 text-lg min-w-30 rounded-[14px] border-[1.2px] border-[#1A9C9A]">
                <DownloadIcon className="mr-2" />
                <span>Save Report</span>
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center pt-12">
            <WeeklyVisitsChart />
          </div>
        </div>
        <div id="dashboard-calendar" className="w-full flex justify-center md:justify-start md:w-35/100 xl:w-3/10">
          Calendar
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
