interface SettingsProps {
  darkMode: boolean;
  fontSize: number;
  language: string;
}

const settings: SettingsProps = {
  darkMode: true,
  fontSize: 16,
  language: "en",
};

console.log(settings);
