import Link from "next/link";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  IconCalendar,
  IconDeviceLaptop,
  IconMapPin,
} from "@tabler/icons-react";

import { technologies as t } from "@/utils/technologies";
import { seniorityLevelToText, remoteToText } from "@/utils/jobOffers";

import Salary from "@/components/JobOfferSalary";

import s from "./styles.module.scss";

dayjs.extend(relativeTime);

/*
 * The prerendered HTML shows the calendar date, since a relative one is out of
 * date by the time it is served and would not match the first client render.
 */
function PostedDate({ date }: { date: string }) {
  const [label, setLabel] = useState(date.slice(0, 10));

  useEffect(() => {
    setLabel(dayjs(date).fromNow());
  }, [date]);

  return <>Posted {label}</>;
}

function UkraineFlag() {
  return (
    <svg width="15" height="10" viewBox="0 0 3 2" role="img" aria-label="Open to candidates from Ukraine">
      <rect width="3" height="1" fill="#0057b7" />
      <rect y="1" width="3" height="1" fill="#ffd700" />
    </svg>
  );
}

export default function JobOffer({ offer }: { offer: any }) {
  const technologyIcon = t[offer.technology.name]
    ? t[offer.technology.name].icon
    : "devicon";
  const technologyBg = t[offer.technology.name]
    ? t[offer.technology.name].color
    : "#858585";
  const devicon = `devicon-${technologyIcon}-plain`;

  return (
    <div className={s.offer}>
      <Link href={"#"} className={s.offerHeader}>
        <div className={s.headerLeft}>
          <div
            className={s.technologyIcon}
            style={{ background: technologyBg }}>
            <i className={devicon} aria-hidden="true"></i>
          </div>
          <div>
            <h2 className={s.title}>{offer.title}</h2>
            <p className={s.company}>{offer.company}</p>
          </div>
        </div>
        <div className={s.headerRight}>
          {offer["ua_supported"] ? <UkraineFlag /> : ""}
          <span className={s.category}>
            <IconMapPin size="10" /> PL
          </span>
        </div>
      </Link>
      <div className={s.salaries}>
        <div className={s.seniority}>
          {seniorityLevelToText(offer.seniority)}
        </div>
        <Salary contracts={offer.contracts} />
      </div>
      <div className={s.offerInfo}>
        <p className={s.postedDate}>
          <IconCalendar size={14} /> <PostedDate date={offer["created_at"]} />
        </p>
        <p className={s.remote}>
          <IconDeviceLaptop size={14} />{" "}
          <span className={s.remoteText}>
            {remoteToText(offer.remote)} | Full-Time
          </span>
        </p>
      </div>
    </div>
  );
}
