import { Button, Group } from "@mantine/core";
import { IconApps, IconUserDollar } from "@tabler/icons-react";

import s from "./styles.module.scss";

export default function Hero() {
  return (
    <div className={s.hero}>
      <div className={s.heroBg}></div>
      <div className={s.heroBgGradients}>
        <div className={s.gradient}></div>
        <div className={s.gradient}></div>
      </div>
      <h1 className={s.title}>
        Launch Your Career in <span className={s.titleGradient}>Tech</span>
      </h1>
      <p className={s.description}>
        Explore hundreds of curated developer roles matched to your skills.
      </p>
      <Group>
        <Button rightSection={<IconApps size={14} />}>Explore offers</Button>
        <Button
          color="white"
          variant="outline"
          rightSection={<IconUserDollar size={14} />}>
          Employer dashboard
        </Button>
      </Group>
    </div>
  );
}
