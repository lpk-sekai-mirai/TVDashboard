import { useEffect, useState } from "react";

interface Participant {
  id: string;
  nama: string;
  alamat: string;
  perusahaanLulus: string;
  tanggalKeberangkatan: string;
  umur: number;
  foto: string;
  statusInterview: string;
}

interface Dashboard {
  total: number;
  totalLulusInterview: number;
  totalBerangkat: number;
}

const API_URL = "https://be-04mm.onrender.com";

function ParticipantInfo() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [dashboard, setDashboard] = useState<Dashboard>({
    total: 0,
    totalLulusInterview: 0,
    totalBerangkat: 0,
  });
  const [participantIndex, setParticipantIndex] = useState(0);
  const [interviewIndex, setInterviewIndex] = useState(0);
  const [departedIndex, setDepartedIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getData = async () => {
      try {
        const [studentsResponse, dashboardResponse] = await Promise.all([
          fetch(`${API_URL}/api/students`),
          fetch(`${API_URL}/api/dashboard`),
        ]);

        if (!studentsResponse.ok) {
          throw new Error("Gagal mengambil data peserta");
        }

        if (!dashboardResponse.ok) {
          throw new Error("Gagal mengambil data dashboard");
        }

        const studentsData: Participant[] =
          await studentsResponse.json();

        const dashboardData: Dashboard =
          await dashboardResponse.json();

        setParticipants(studentsData);
        setDashboard(dashboardData);
      } catch (error) {
        console.error(error);
        setError("Data peserta gagal dimuat");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const interviewPassed = participants.filter(
    (participant) =>
      participant.statusInterview.toLowerCase() === "lulus",
  );

  const departedParticipants = participants.filter(
    (participant) =>
      participant.tanggalKeberangkatan &&
      participant.tanggalKeberangkatan.trim() !== "",
  );

  useEffect(() => {
    if (participants.length <= 1) return;

    const timer = setInterval(() => {
      setParticipantIndex(
        (prevIndex) => (prevIndex + 1) % participants.length,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [participants.length]);

  useEffect(() => {
    if (interviewPassed.length <= 1) return;

    const timer = setInterval(() => {
      setInterviewIndex(
        (prevIndex) =>
          (prevIndex + 1) % interviewPassed.length,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [interviewPassed.length]);

  useEffect(() => {
    if (departedParticipants.length <= 1) return;

    const timer = setInterval(() => {
      setDepartedIndex(
        (prevIndex) =>
          (prevIndex + 1) % departedParticipants.length,
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [departedParticipants.length]);

  if (loading) {
    return (
      <aside className="rounded-lg bg-white p-6 shadow-md">
        <p>Memuat data peserta...</p>
      </aside>
    );
  }

  if (error) {
    return (
      <aside className="rounded-lg bg-white p-6 shadow-md">
        <p className="text-red-500">{error}</p>
      </aside>
    );
  }

  const participant = participants[participantIndex];

  const interviewParticipant =
    interviewPassed.length > 0
      ? interviewPassed[interviewIndex]
      : null;

  const departedParticipant =
    departedParticipants.length > 0
      ? departedParticipants[departedIndex]
      : null;

  return (
    <aside className="flex h-full flex-col gap-2">
      <section className="px-8 flex-1 rounded-lg backdrop-blur-sm bg-white shadow-md border border-black">
        {participant ? (
          <div className="grid h-full grid-cols-3 items-center gap-4">
            <div className="space-y-1">
              <p className="text-lg font-semibold text-gray-700">
                  {participant.nama}
              </p>
              <p className="text-lg font-semibold text-gray-700">
                  {participant.alamat}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={participant.foto}
                alt={`Foto ${participant.nama}`}
                className="h-48 w-42 object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                参加者数
              </h2>
              <h2 className="text-lg text-gray-800">
                Jumlah Peserta
              </h2>
              <p className="mt-1 text-5xl font-bold text-gray-800">
                {dashboard.total}
              </p>
            </div>
          </div>
        ) : (
          <p>Belum ada data peserta.</p>
        )}
      </section>

      <section className="flex-1 rounded-lg backdrop-blur-sm bg-white px-8 shadow-md border border-black">
        {interviewParticipant ? (
          <div className="grid h-full grid-cols-3 items-center gap-4">
            <div className="space-y-1">
              <p className="text-md text-gray-700">
                  {interviewParticipant.nama}
              </p>
              <p className="text-md text-gray-700">
                  {interviewParticipant.alamat}
              </p>
              <p className="text-md text-gray-700">
                  {interviewParticipant.perusahaanLulus}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={interviewParticipant.foto}
                alt={`Foto ${interviewParticipant.nama}`}
                className="h-48 w-42 object-cover"
                />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                面接合格者数
              </h2>
              <h2 className="text-lg font-semibold text-gray-800">
                Lulus Interview
              </h2>
              <p className="mt-1 text-5xl font-bold text-gray-800">
                {dashboard.totalLulusInterview}
              </p>
            </div>
          </div>
        ) : (
          <p>Belum ada peserta yang lulus interview.</p>
        )}
      </section>

      <section className="flex-1 rounded-lg backdrop-blur-sm bg-white px-8 shadow-md border border-black">
        {departedParticipant ? (
          <div className="grid h-full grid-cols-3 items-center gap-4">
            <div className="space-y-1">
              <p className="text-md text-gray-700">
                <span className="font-semibold">
                  {departedParticipant.nama}
                </span>
              </p>
              <p className="text-md text-gray-700">
                <span>
                  {departedParticipant.alamat}
                </span>
              </p>
              <p className="text-md text-gray-700">
                <span>
                  {departedParticipant.perusahaanLulus}
                </span>
              </p>
              <p className="text-md text-gray-700">
                <span>
                  {departedParticipant.tanggalKeberangkatan}
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={departedParticipant.foto}
                alt={`Foto ${departedParticipant.nama}`}
                className="h-48 w-42 object-cover"
              />
            </div>
            <div className="text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                日本への出発者数
              </h2>
              <h2 className="text-lg font-semibold text-gray-800">
                Jumlah yang Berangkat ke Jepang
              </h2>
              <p className="mt-1 text-5xl font-bold text-gray-800">
                {dashboard.totalBerangkat}
              </p>
            </div>
          </div>
        ) : (
          <p>Belum ada peserta yang berangkat.</p>
        )}
      </section>
    </aside>
  );
}

export default ParticipantInfo;

