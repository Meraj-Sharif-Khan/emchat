const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex gap-3">
      <div className="form-control">
        <label htmlFor="male" className={`cursor-pointer`}>
          Male
        </label>
        <input
          id="male"
          name="male"
          required={!selectedGender}
          autoComplete="sex"
          type="checkbox"
          className="ml-2 checkbox border-white-900"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
        />
      </div>

      <div className="form-control">
        <label htmlFor="female" className={`cursor-pointer`}>
          Female
        </label>
        <input
          id="female"
          name="female"
          required={!selectedGender}
          autoComplete="sex"
          type="checkbox"
          className="ml-2 checkbox border-white-900"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
        />
      </div>
    </div>
  );
};

export default GenderCheckbox;
