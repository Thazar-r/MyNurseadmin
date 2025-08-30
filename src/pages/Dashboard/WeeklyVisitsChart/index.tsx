import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import ChartTooltip from './ChartTooltip';
import { formatDateTime } from '@utils/numbers';
import { WEEKLY_VISITS } from './constants';

function WeeklyVisitsChart(): React.JSX.Element {
  const formatTick = (tick: number): string => formatDateTime(tick, {
    weekday: 'long',
  });

  return (
    <ResponsiveContainer
      height="100%"
      width="100%"
      minHeight={172}
    >
      <AreaChart data={WEEKLY_VISITS}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#1A9C9A" stopOpacity={0.6} />
            <stop offset="95%" stopColor="#1A9C9A" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          interval="preserveStartEnd"
          tickMargin={0}
          tick={{ fontSize: 14 }}
          className="font-barlow text-neutral-gray-6"
          tickFormatter={formatTick}
        />
        <Tooltip cursor={false} content={<ChartTooltip />} />
        <Area
          type="monotone"
          dataKey="numUsers"
          stroke="#1A9C9A"
          strokeWidth={3}
          fillOpacity={1}
          fill="url(#colorUv)"
          activeDot={{ r: 12, fill: '#2D9CDB', strokeWidth: 5 }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default WeeklyVisitsChart;
