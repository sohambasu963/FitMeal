import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import InfoIcon from '@mui/icons-material/Info';

export function NutritionalInfo({ info }: any) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <InfoIcon />
          </TooltipTrigger>
          <TooltipContent>
            <div className="text-black p-4 rounded-lg flex flex-col space-y-2 w-40">
              <div className="flex flex-row items-center justify-between">
                <span className="font-bold text-blue-600">Calories</span>
                <span className="font-medium text-gray-700">{info.calories}</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-bold text-green-600">Protein</span>
                <span className="font-medium text-gray-700">{info.protein}g</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-bold text-yellow-600">Carbs</span>
                <span className="font-medium text-gray-700">{info.carbs}g</span>
              </div>
              <div className="flex flex-row items-center justify-between">
                <span className="font-bold text-red-600">Fat</span>
                <span className="font-medium text-gray-700">{info.fat}g</span>
              </div>
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }
