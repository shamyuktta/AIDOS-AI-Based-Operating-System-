import Header from "../../components/Header/Header";
import SettingItem from "../../components/SettingItem/SettingItem";

export default function Settings() {
  return (
    <>
      <Header
        title="Settings"
        subtitle="Customize your AIDOS experience"
      />

      <SettingItem
        title="Theme"
        value="Dark"
      />

      <SettingItem
        title="Language"
        value="English"
      />

      <SettingItem
        title="Browser"
        value="Chrome"
      />

      <SettingItem
        title="Download Folder"
        value="C:\\Users\\Downloads"
      />

      <SettingItem
        title="Notifications"
        value="Enabled"
      />
    </>
  );
}