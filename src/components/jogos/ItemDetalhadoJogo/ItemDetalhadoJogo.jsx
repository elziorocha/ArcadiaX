import {
  AiFillClockCircle,
  AiOutlineDesktop,
  AiFillSetting,
  AiFillTags,
} from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import PropTypes from "prop-types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { LojaItem } from "../../loja/index";
import "./ItemDetalhadoJogo.css";

const ItemDetalhadoJogo = ({ itemJogo }) => {
  let plataformas = itemJogo?.platforms?.map(
    (platform) => platform.platform.name
  );

    console.log('ItemDetalhadoJogo', itemJogo);

  let developers = itemJogo?.developers?.map((developer) => developer.name);
  let genres = itemJogo?.genres?.map((genre) => genre.name);
  let publishers = itemJogo?.publishers?.map((publisher) => publisher.name);

  return (
    <div id="itemDetalhadoJogo">
      <div className="details-title">
        <h3 className="details-title-text text-white fw-6 text-uppercase">
          {itemJogo?.name}
        </h3>
      </div>
      <div className="details-grid d-grid">
        <div className="details-left img-fit-cover">
          <img src={`${itemJogo?.background_image}`} alt={itemJogo?.name} />
        </div>

        <div className="details-right">
          <h4 className="details-right-title fw-7 text-green mb-3">
            Game <span className="text-white">Detalhes</span>
          </h4>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{
              __html:
                itemJogo?.description?.split(".").splice(0, 3).join(".") + ".",
            }}
          ></div>

          <ul className="details-list-group">
            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillClockCircle size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  data lançamento:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {itemJogo?.released}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiOutlineDesktop size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  plataformas:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {plataformas?.join(", ")}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillSetting size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  desenvolvedores:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {developers?.join(", ")}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <AiFillTags size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">gêneros:</span>
              </div>
              <span className="item-right item-value fw-4">
                {genres?.join(", ")}
              </span>
            </li>

            <li className="list-group-item text-white d-flex align-items-center flex-wrap">
              <div className="item-left d-flex align-items-center">
                <span className="item-icon d-flex align-items-center justify-content-start me-2">
                  <FaGlobe size={20} />
                </span>
                <span className="item-title text-uppercase fw-6">
                  estúdio:
                </span>
              </div>
              <span className="item-right item-value fw-4">
                {publishers?.join(", ")}
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Tabs */}
      <Tabs>
        <TabList>
          <Tab>Descrição</Tab>
          <Tab>Plataformas</Tab>
          <Tab>Stores</Tab>
        </TabList>

        <TabPanel>
          <h3 className="text-white mb-3">Descrição</h3>
          <div
            className="para-text"
            dangerouslySetInnerHTML={{ __html: itemJogo?.description }}
          ></div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white mb-3">Plataformas</h3>
          <div className="platforms-list card-list">
            {itemJogo?.platforms?.map((item) => {
              return (
                <div
                  className="platform-item text-white"
                  key={item?.platform?.id}
                >
                  <p className="platform-name mb-2">{item?.platform?.name}</p>
                  <div className="platform-img-wrapper img-fit-cover">
                    <img
                      src={item?.platform?.image_background}
                      className="platform-img"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </TabPanel>
        <TabPanel>
          <h3 className="text-white mb-3">Available Stores</h3>
          <div className="card-list">
            {itemJogo?.stores?.map((item) => (
              <LojaItem key={item?.store?.id} lojaItem={item?.store} />
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ItemDetalhadoJogo;

ItemDetalhadoJogo.propTypes = {
  itemJogo: PropTypes.object,
};
