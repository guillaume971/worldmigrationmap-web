const Legend: React.FC = () => (
  <>
    <div className="flex items-center">
      <div className="w-4 h-4 bg-white border border-gray-700 mr-2" />
      <div>Outward migration</div>
    </div>
    <div className="flex items-center">
      <div className="w-4 h-4 bg-gray-400 border border-gray-700 mr-2" />
      <div>Balanced migration</div>
    </div>
    <div className="flex items-center">
      <div className="w-4 h-4 bg-black border border-gray-700 mr-2" />
      <div>Inward migration</div>
    </div>
  </>
);

export default Legend;
