import { getMaterials } from "../services/CourseMaterialsService";
import { Download } from "lucide-react";

export default function CourseMaterialsView() {
    const files = getMaterials();
    const isAdmin = true;

    return (
        <div className="mt-2 w-full">
            {isAdmin && (
                <button className="mt-0 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
                    Add Material
                </button>
            )}
            <h2 className="mt-3 text-xl font-semibold mb-6">Materials</h2>
            <div className="space-y-4">
                {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg p-4 shadow hover:shadow-md transition">
                        <div>
                            <h3 className="text-md font-semibold text-gray-800">{file.name}</h3>
                            <p className="text-sm text-gray-500">{file.format}</p>
                        </div>
                        <a
                            href={file.link}
                            download
                            className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-md"
                        >
                            <Download size={16} />
                            Download
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
