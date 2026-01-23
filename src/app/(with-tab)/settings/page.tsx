import { Metadata } from "next";
import SettingsContent from "@/components/settings/SettingContents";

export const metadata: Metadata = {
  title: "설정",
};

export default function SettingsPage() {
  return <SettingsContent />;
}