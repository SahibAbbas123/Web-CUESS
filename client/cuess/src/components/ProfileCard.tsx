// ProfileCard.tsx (visual version)
export default function ProfileCard({ name, role, img="" }:{
  name:string; role:string; img?:string;
}){
  return (
    <div className="rounded-3xl overflow-hidden bg-white border hover:shadow-card transition">
      <div className="aspect-[4/5] bg-gray-100">
        {img ? <img src={img} alt={name} className="h-full w-full object-cover" /> : null}
      </div>
      <div className="p-4">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-black/60">{role}</div>
      </div>
    </div>
  );
}