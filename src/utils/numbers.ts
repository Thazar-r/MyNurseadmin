export type Style = 'decimal' | 'currency' | 'percent';

interface DateTimeOpts extends Intl.DateTimeFormatOptions {
  locale?: string;
  withOrdinalSuffix?: boolean;
}

export const formatNumber = (
  num: number,
  { style = 'currency' as Style, ...rest } = {},
): string => Intl.NumberFormat('en-GB', {
  style,
  currency: 'GBP',
  minimumFractionDigits: style === 'currency' ? 2 : undefined,
  maximumFractionDigits: 2,
  ...rest,
}).format(num);

const formatDateTimeWithOrdinalSuffix = (
  date: number | Date,
  locale: string,
  opts: DateTimeOpts,
): string => {
  // Intl.PluralRules is used to get the correct ordinal suffix for the locale
  const pRules = new Intl.PluralRules(locale, { type: 'ordinal' });

  // Map the plural rules to the correct English suffixes
  const suffixes = new Map([
    ['one', 'st'],
    ['two', 'nd'],
    ['few', 'rd'],
    ['other', 'th'],
  ]);

  const dateTime = Intl.DateTimeFormat(locale, opts);

  // Format the date into parts and find the day
  const dateParts = dateTime.formatToParts(date);
  const dayPart = dateParts.find(
    (part: Intl.DateTimeFormatPart): boolean => part.type === 'day',
  );

  if (!dayPart) {
    // Fallback if no day part
    return dateTime.format(date);
  }

  const dayNumber = parseInt(dayPart.value, 10);
  const suffix = suffixes.get(pRules.select(dayNumber));
  
  // Build the final string by replacing the day number with the ordinal day
  return dateParts.map((part: Intl.DateTimeFormatPart): string => {
    if (part.type === 'day') {
      return `${dayNumber}${suffix}`;
    }
    return part.value;
  }).join('');
}

export const formatDateTime = (
  date: number | Date,
  { locale = 'en-GB', withOrdinalSuffix, ...opts }: DateTimeOpts,
): string => {
  if (withOrdinalSuffix) {
    return formatDateTimeWithOrdinalSuffix(date, locale, opts);
  }
  return Intl.DateTimeFormat(locale, opts).format(date);
};
