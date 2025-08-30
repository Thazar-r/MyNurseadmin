import Typography from '@/components/Typography';
import { formatDateTime } from '@utils/numbers';

interface Payload {
  value: string | number;
  payload: { day: number };
};

interface Props {
  active?: boolean;
  payload?: Payload[];
}

function ChartTooltip({ active, payload }: Props): React.ReactNode {
  if (active && payload?.length) {
    return (
      <div
        className="rounded-xl bg-white px-5 py-2 shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)]"
      >
        <div>
          <Typography
            variant="span"
            weight="strong"
            color="tertiaryHeading"
          >
            {payload[0].value}
          </Typography>
          <Typography
            variant="span"
            color="tertiaryHeading"
          >
            &nbsp;&nbsp;Users
          </Typography>
        </div>
        <Typography
          variant="body2"
          className='text-neutral-550'
        >
          {formatDateTime(new Date(payload[0].payload.day), {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            locale: 'en-US',
            withOrdinalSuffix: true,
          })}
        </Typography>
      </div>
    );
  }
  return null;
}

export default ChartTooltip;
