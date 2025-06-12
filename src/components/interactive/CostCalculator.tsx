import React, { useState } from 'react';
import { Calculator, DollarSign } from 'lucide-react';

interface Fee {
  name: string;
  amount: number;
  description: string;
}

interface CalculationResult {
  visaFees: number;
  serviceFees: number;
  additionalFees: Fee[];
  totalAmount: number;
  estimatedProcessingTime: string;
}

const CostCalculator: React.FC = () => {
  const [country, setCountry] = useState('');
  const [visaType, setVisaType] = useState('');
  const [servicePlan, setServicePlan] = useState('');
  const [addons, setAddons] = useState<string[]>([]);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<CalculationResult | null>(null);
  
  const visaTypeOptions: { [key: string]: string[] } = {
    'United States': ['Tourist', 'Business', 'Student', 'Work', 'Transit'],
    'Canada': ['Tourist', 'Business', 'Student', 'Express Entry', 'Family'],
    'United Kingdom': ['Standard Visitor', 'Business', 'Student', 'Work', 'Family'],
    'Australia': ['Tourist', 'Business', 'Student', 'Work', 'Partner'],
    'Schengen': ['Tourist', 'Business', 'Student', 'Work', 'Medical']
  };
  
  const handleAddonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setAddons([...addons, value]);
    } else {
      setAddons(addons.filter(addon => addon !== value));
    }
  };
  
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (country && visaType && servicePlan) {
      setIsCalculating(true);
      
      // Simulate API call with a timeout
      setTimeout(() => {
        // Mock calculation results
        const mockVisaFees = country === 'United States' ? 160 : 
                            country === 'Canada' ? 100 :
                            country === 'United Kingdom' ? 120 :
                            country === 'Australia' ? 150 : 80;
        
        const mockServiceFees = servicePlan === 'Standard' ? 50 :
                              servicePlan === 'Premium' ? 100 :
                              servicePlan === 'VIP' ? 200 : 0;
        
        const mockAdditionalFees: Fee[] = [];
        
        if (addons.includes('documentTranslation')) {
          mockAdditionalFees.push({
            name: 'Document Translation',
            amount: 30,
            description: 'Translation of required documents to destination country language'
          });
        }
        
        if (addons.includes('expeditedProcessing')) {
          mockAdditionalFees.push({
            name: 'Expedited Processing',
            amount: 80,
            description: 'Priority handling of your visa application'
          });
        }
        
        if (addons.includes('insuranceCoverage')) {
          mockAdditionalFees.push({
            name: 'Travel Insurance',
            amount: 45,
            description: 'Comprehensive travel insurance coverage'
          });
        }
        
        if (addons.includes('documentPreparation')) {
          mockAdditionalFees.push({
            name: 'Document Preparation',
            amount: 40,
            description: 'Professional preparation and review of all required documents'
          });
        }
        
        const totalAdditionalFees = mockAdditionalFees.reduce((sum, fee) => sum + fee.amount, 0);
        const totalAmount = mockVisaFees + mockServiceFees + totalAdditionalFees;
        
        const mockResult: CalculationResult = {
          visaFees: mockVisaFees,
          serviceFees: mockServiceFees,
          additionalFees: mockAdditionalFees,
          totalAmount,
          estimatedProcessingTime: servicePlan === 'VIP' ? '3-5 business days' : 
                                  servicePlan === 'Premium' ? '7-10 business days' : 
                                  '15-20 business days'
        };
        
        setResult(mockResult);
        setIsCalculating(false);
      }, 1200);
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold mb-6">Visa Cost Calculator</h2>
      
      <form onSubmit={handleCalculate} className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination Country
            </label>
            <select
              value={country}
              onChange={(e) => {
                setCountry(e.target.value);
                setVisaType('');
              }}
              className="select"
              required
            >
              <option value="" disabled>Select country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Schengen">Schengen Countries</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Visa Type
            </label>
            <select
              value={visaType}
              onChange={(e) => setVisaType(e.target.value)}
              className="select"
              disabled={!country}
              required
            >
              <option value="" disabled>Select visa type</option>
              {country && visaTypeOptions[country]?.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Service Plan
            </label>
            <select
              value={servicePlan}
              onChange={(e) => setServicePlan(e.target.value)}
              className="select"
              required
            >
              <option value="" disabled>Select service plan</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Additional Services
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="documentTranslation"
                value="documentTranslation"
                checked={addons.includes('documentTranslation')}
                onChange={handleAddonChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="documentTranslation" className="ml-2 text-sm text-gray-700">
                Document Translation
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="expeditedProcessing"
                value="expeditedProcessing"
                checked={addons.includes('expeditedProcessing')}
                onChange={handleAddonChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="expeditedProcessing" className="ml-2 text-sm text-gray-700">
                Expedited Processing
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="insuranceCoverage"
                value="insuranceCoverage"
                checked={addons.includes('insuranceCoverage')}
                onChange={handleAddonChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="insuranceCoverage" className="ml-2 text-sm text-gray-700">
                Travel Insurance
              </label>
            </div>
            
            <div className="flex items-center">
              <input
                type="checkbox"
                id="documentPreparation"
                value="documentPreparation"
                checked={addons.includes('documentPreparation')}
                onChange={handleAddonChange}
                className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
              />
              <label htmlFor="documentPreparation" className="ml-2 text-sm text-gray-700">
                Document Preparation
              </label>
            </div>
          </div>
        </div>
        
        <button
          type="submit"
          className="btn btn-primary mt-6"
          disabled={isCalculating || !country || !visaType || !servicePlan}
        >
          {isCalculating ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Calculating...
            </>
          ) : (
            <>
              <Calculator size={18} className="mr-2" />
              Calculate Cost
            </>
          )}
        </button>
      </form>
      
      {result && (
        <div className="border border-gray-200 rounded-lg p-6 animate-slide-up">
          <h3 className="text-xl font-semibold mb-4">Cost Breakdown</h3>
          
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Visa Fees</span>
              <span className="font-medium">${result.visaFees.toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between items-center py-2 border-b border-gray-100">
              <span className="text-gray-700">Service Fees ({servicePlan})</span>
              <span className="font-medium">${result.serviceFees.toFixed(2)}</span>
            </div>
            
            {result.additionalFees.map((fee, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100">
                <div>
                  <span className="text-gray-700">{fee.name}</span>
                  <p className="text-xs text-gray-500">{fee.description}</p>
                </div>
                <span className="font-medium">${fee.amount.toFixed(2)}</span>
              </div>
            ))}
            
            <div className="flex justify-between items-center py-3 mt-2 bg-gray-50 rounded-lg px-4">
              <span className="font-semibold text-lg">Total Amount</span>
              <span className="font-bold text-xl text-primary-700">${result.totalAmount.toFixed(2)}</span>
            </div>
          </div>
          
          <div className="bg-primary-50 p-4 rounded-lg">
            <div className="flex items-center">
              <div className="mr-3 p-2 bg-primary-100 rounded-full">
                <DollarSign size={18} className="text-primary-600" />
              </div>
              <div>
                <h4 className="font-medium">Estimated Processing Time</h4>
                <p className="text-sm text-gray-600">{result.estimatedProcessingTime}</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <button
              className="btn btn-primary"
            >
              Proceed with Application
            </button>
            <p className="text-xs text-gray-500 mt-2">
              Prices are in USD and subject to change. Additional fees may apply based on consulate requirements.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CostCalculator;