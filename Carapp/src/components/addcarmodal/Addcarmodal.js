import { useFormik } from "formik";
import React from "react";
import { FiCamera } from "react-icons/fi";

const Addcarmodal = () => {

  const formik = useFormik({
    initialValues: {
      motor: "",
      color: "",
      gearbook: "",
      fileimg1: "Yuklash",
      description: "",
      tanirovkasi: "",
      year: "",
      distance: "",
      narxi: "",
      fileimg2: "Yuklash",
      fileimg3: "Yuklash",
      categoryId:"631810ae7ff943f201d4ca7c"
    },
    onSubmit: (values) => {
      console.log(values);
      formik.resetForm();
    },
  });
  return (
    <div
      className="modal "
      id="staticBackdrop2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Mashina qo’shish
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-6 col-12">
                  <div>
                    <h6 className="filtext">Markasi</h6>
                    <select
                      name="markasi"
                      id="marka2"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="CHEVROLET">CHEVROLET</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="d-block " htmlFor="Motor">
                      <h6>Motor</h6>
                    </label>
                    <input
                      required
                      name="motor"
                      onChange={formik.handleChange}
                      value={formik.values.motor}
                      className="w-100 inpcor"
                      id="motor"
                      type="text"
                      placeholder=" Kiriting"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="d-block " htmlFor="Color">
                      <h6>Color</h6>
                    </label>
                    <input
                      required
                      onChange={formik.handleChange}
                      value={formik.values.color}
                      name="color"
                      className="w-100 inpcor"
                      id="color"
                      type="text"
                      placeholder=" Kiriting"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="d-block " htmlFor="Gearbook">
                      <h6>Gearbook</h6>
                    </label>
                    <input
                      required
                      name="gearbook"
                      onChange={formik.handleChange}
                      value={formik.values.gearbook}
                      className="w-100 inpcor"
                      id="gearbook"
                      type="text"
                      placeholder=" Kiriting"
                    />
                  </div>

                  <div className="input__wrapper mt-4">
                    <h6 className="filtext">Rasm 360 ichki makon</h6>
                    <input
                      required
                      onChange={e=>formik.setFieldValue("fileimg1",e.target.files[0].name)}
                      name="fileimg1"
                      type="file"
                      id="fileimg1"
                      className="input input__file"
                      accept=".jpg, .jpeg, .png"
                      multiple
                    />
                    <label htmlFor="fileimg1" className="input__file-button">
                      <span className="input__file-icon-wrapper">
                        <FiCamera size="20px" />
                      </span>
                      <span>{formik.values.fileimg1}</span>
                    </label>
                  </div>

                  <div className="mt-4">
                    <h6>Deseription</h6>
                    <div className="form-floating">
                      <textarea
                      onChange={formik.handleChange}
                      value={formik.values.description}
                        name="description"
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="description"
                      ></textarea>
                      <label htmlFor="description">Mazmuni kiriting</label>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-12 ">
                  <div>
                    <h6 className="filtext">Tanirovkasi</h6>
                    <select
                    onChange={formik.handleChange}
                    value={formik.values.tanirovkasi}
                      name="tanirovkasi"
                      id="tanirovkasi"
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option value="Yoq">Yoq</option>
                      <option value="Bor">Bor</option>
                    </select>
                  </div>

                  <div className="mt-4">
                    <label className="d-block " htmlFor="year">
                      <h6>Year</h6>
                    </label>
                    <input
                      required
                      onChange={formik.handleChange}
                      value={formik.values.year}
                      name="year"
                      className="w-100 inpcor"
                      id="year"
                      type="number"
                      placeholder=" Kiriting"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="d-block " htmlFor="distance">
                      <h6>Distance</h6>
                    </label>
                    <input
                      required
                      onChange={formik.handleChange}
                      value={formik.values.distance}
                      name="distance"
                      className="w-100 inpcor"
                      id="distance"
                      type="number"
                      placeholder=" Kiriting"
                    />
                  </div>

                  <div className="mt-4">
                    <label className="d-block " htmlFor="narxi">
                      <h6>Narxi</h6>
                    </label>
                    <input
                      required
                      onChange={formik.handleChange}
                      value={formik.values.narxi}
                      name="narxi"
                      className="w-100 inpcor"
                      id="narxi"
                      type="number"
                      placeholder=" Kiriting"
                    />
                  </div>

                  <div className="input__wrapper mt-4">
                    <h6 className="filtext">Rasm 360 tashqi makon</h6>
                    <input
                      required
                      onChange={e=>formik.setFieldValue("fileimg2",e.target.files[0].name)}
                     
                      name="fileimg2"
                      type="file"
                      id="fileimg2"
                      className="input input__file"
                      accept=".jpg, .jpeg, .png"
                      multiple
                    />
                    <label htmlFor="fileimg2" className="input__file-button">
                      <span className="input__file-icon-wrapper">
                        <FiCamera size="20px" />
                      </span>
                      <span>{formik.values.fileimg2}</span>
                    </label>
                  </div>

                  <div className="input__wrapper mt-4">
                    <h6 className="filtext">Modeli turi uchun rasm </h6>
                    <input
                      required
                      onChange={e=>formik.setFieldValue("fileimg3",e.target.files[0].name)}
                      name="fileimg3"
                      type="file"
                      id="fileimg3"
                      className="input input__file"
                      accept=".jpg, .jpeg, .png"
                      multiple
                    />
                    <label htmlFor="fileimg3" className="input__file-button">
                      <span className="input__file-icon-wrapper">
                        <FiCamera size="20px" />
                      </span>
                      <span>{formik.values.fileimg3}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Saqlash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addcarmodal;
