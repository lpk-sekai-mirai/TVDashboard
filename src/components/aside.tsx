import { useEffect, useState } from "react";

interface Participant {
  id: string;
  nama: string;
  alamat: string;
  perusahaanLulus: string;
  namaJepang: string;
  alamatJepang: string;
  perusahaanLulusJepang: string;
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

  const [dashboard, setDashboard] = useState<Dashboard>(
  {
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
      participant.statusInterview?.toLowerCase() === "lulus",
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
    <aside className="flex h-full flex-col gap-2 md:gap-1">
      <section className="flex-1 lg:rounded-lg md:rounded-sm bg-white lg:px-4 lg:py-0 shadow-md border border-black md:px-3 md:py-0 ">
        {participant ? (
          <div className="grid h-full grid-cols-3 items-center gap-4">
            <div className="lg:space-y-1 md:space-y-0">
              <p className="font-semibold text-gray-700 
              lg:text-xl md:text-[8px]">
                  {participant.nama}
              </p>
              <p className="font-semibold text-gray-700 
              lg:text-xl md:text-[8px]">
                  {participant.alamat}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={participant.foto}
                alt={`Foto ${participant.nama}`}
                className="lg:h-38 lg:w-32 object-contain 
                md:h-12 
                md:w-8"
              />
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-gray-800 lg:text-2xl md:text-[10px]">
                参加者数
              </h2>
              <h2 className="text-xl text-gray-800 lg:text-xl md:text-[6px]">
                Jumlah Peserta
              </h2>
              <p className="mt-1 lg:text-5xl font-bold text-gray-800 md:text-sm">
                {dashboard.total}
              </p>
            </div>
          </div>
        ) : (
          <p>Belum ada data peserta.</p>
        )}
      </section>

      <section className="flex-1 lg:rounded-lg md:rounded-sm bg-white lg:px-4 lg:py-0 shadow-md border border-black md:px-3 md:py-0">
        {interviewParticipant ? (
          <div className="grid h-full grid-cols-3 items-center gap-4">
            <div className="lg:space-y-1 md:space-y-0">
              <p className="font-semibold text-gray-700 lg:text-xl md:text-[6px]">
                  {interviewParticipant.nama}
              </p>
              <p className="font-semibold text-gray-700 lg:text-xl md:text-[6px]">
                  {interviewParticipant.alamat}
              </p>
              <p className="font-semibold text-gray-700 lg:text-xl md:text-[6px]">
                  {interviewParticipant.perusahaanLulus}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={interviewParticipant.foto}
                alt={`Foto ${interviewParticipant.nama}`}
                className="lg:h-38 lg:w-32 object-contain 
                md:h-12 
                md:w-8"
                />
            </div>
            <div className="text-center">
              <h2 className="font-semibold text-gray-800 lg:text-2xl md:text-[9px]">
                面接合格者数
              </h2>
              <h2 className="font-semibold text-gray-800 lg:text-xl md:text-[8px]">
                Lulus Interview
              </h2>
              <p className="mt-1 font-bold text-gray-800 lg:text-5xl md:text-lg">
                {dashboard.totalLulusInterview}
              </p>
            </div>
          </div>
        ) : (
          <p>Belum ada peserta yang lulus interview.</p>
        )}
      </section>

      <section className="flex-1 lg:rounded-lg md:rounded-sm bg-white lg:px-4 lg:py-0 shadow-md border border-black md:px-3 md:py-0 ">
        {departedParticipant ? (
          <div className="grid h-full grid-cols-3 items-center gap-4">
            <div className="lg:space-y-1 md:space-y-0">
              <p className="text-xl text-gray-700 lg:text-xl md:text-[6px]">
                <span className="font-semibold">
                  {departedParticipant.nama}
                </span>
              </p>
              <p className="text-xl font-semibold text-gray-700 lg:text-xl md:text-[6px]">
                <span>
                  {departedParticipant.alamat}
                </span>
              </p>
              <p className="text-xl font-semibold text-gray-700 lg:text-xl md:text-[6px]">
                <span>
                  {departedParticipant.perusahaanLulus}
                </span>
              </p>
              <p className="text-lg font-semibold text-gray-700 lg:text-xl md:text-[6px]">
                <span>
                  {departedParticipant.tanggalKeberangkatan}
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={departedParticipant.foto}
                alt={`Foto ${departedParticipant.nama}`}
                className="lg:h-38 lg:w-32 object-contain 
                md:h-12 
                md:w-8"
              />
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 lg:text-xl md:text-[8px]">
                出発者数
              </h2>
              <h2 className="text-lg font-semibold text-gray-800 lg:text-xl md:text-[6px]">
                Jumlah Berangkat
              </h2>
              <p className="mt-1 lg:text-5xl font-bold text-gray-800 md:text-lg">
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

