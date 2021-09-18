import React from 'react';
import '../Styles/product-breakdown.scss'
class ProductBreakdown extends React.Component {
  constructor(props) {
    super(props);
    this.characteristicBarVal = this.characteristicBarVal.bind(this);
  }

  characteristicBarVal(value) {
    return (Math.round(Number(value) * 4) / 4).toFixed(2);
  }

  render() {
    const { characteristics } = this.props.metaData;

    return (
      <div className="grid-layout">
        {
          this.props.metaData.characteristics.Comfort
          && (
            <div style={{
              gridColumn: '1',
              gridRow: '1',
              marginBottom: '10px',
              width: '228px',
            }}
            >
              <div className="characteristics-title">Comfort</div>

              <span
                className="fa fa-caret-down"
                style={{
                  color: 'black',
                  height: '20px',
                  marginLeft: `${((this.characteristicBarVal(characteristics.Comfort.value) / 5) * 100)}%`,
                }}
              />
              <div className="characteristics-bar"></div>
              <div className="characteristics-trait">
                <div className="margin-right">
                  Bad
                </div>
                <div className="margin-center">
                  Ok
                </div>
                <div className="margin-left">
                  Perfect
                </div>
              </div>


            </div>
          )
        }
        {
          this.props.metaData.characteristics.Fit
          && (
            <div style={{
              gridColumn: '1',
              gridRow: '2',
              marginBottom: '10px',
              width: '228px',
            }}
            >
              <div className="characteristics-title">Fit</div>

              <span
                className="fa fa-caret-down"
                style={{
                  color: 'black',
                  height: '20px',
                  marginLeft: `${((this.characteristicBarVal(characteristics.Fit.value) / 5) * 100)}%`,
                }}
              />
              <div className="characteristics-bar"></div>
              <div className="characteristics-trait">
                <div className="margin-right">
                  Runs tight
                </div>
                <div className="margin-center">
                  Perfect
                </div>
                <div className="margin-left">
                  Runs long
                </div>
              </div>
            </div>
          )
        }
        {
          this.props.metaData.characteristics.Length
          && (
            <div style={{
              gridColumn: '1',
              gridRow: '3',
              marginBottom: '10px',
              width: '228px',
            }}
            >
              <div className="characteristics-title">Length</div>

              <span
                className="fa fa-caret-down"
                style={{
                  color: 'black',
                  height: '20px',
                  marginLeft: `${((this.characteristicBarVal(characteristics.Length.value) / 5) * 100)}%`,
                }}
              />
              <div className="characteristics-bar"></div>

              <div className="characteristics-trait">
                <div className="margin-right">
                  Runs short
                </div>
                <div className="margin-center">
                  Perfect
                </div>
                <div className="margin-left">
                  Runs long
                </div>
              </div>
            </div>
          )
        }
        {
          this.props.metaData.characteristics.Quality
          && (
            <div style={{
              gridColumn: '1',
              gridRow: '4',
              marginBottom: '10px',
              width: '228px',
            }}
            >
              <div className="characteristics-title">Quality</div>

              <span
                className="fa fa-caret-down"
                style={{
                  color: 'black',
                  height: '20px',
                  marginLeft: `${((this.characteristicBarVal(characteristics.Quality.value) / 5) * 100)}%`,
                }}
              />
              <div className="characteristics-bar"></div>

              <div className="characteristics-trait">
                <div className="margin-right">
                  Poor
                </div>
                <div className="margin-center">
                  Expected
                </div>
                <div className="margin-left">
                  Perfect
                </div>
              </div>
            </div>
          )
        }
        {
          this.props.metaData.characteristics.Size
          && (
            <div style={{
              gridColumn: '1',
              gridRow: '5',
              marginBottom: '10px',
              width: '228px',
            }}
            >
              <div className="characteristics-title">Size</div>

              <span
                className="fa fa-caret-down"
                style={{
                  color: 'black',
                  height: '20px',
                  marginLeft: `${((this.characteristicBarVal(characteristics.Size.value) / 5) * 100)}%`,
                }}
              />
              <div className="characteristics-bar"></div>
              <div className="characteristics-trait">
                <div className="margin-right">
                  Too small
                </div>
                <div className="margin-center">
                  Perfect
                </div>
                <div className="margin-left">
                  Too wide
                </div>
              </div>
            </div>
          )
        }
        {
          this.props.metaData.characteristics.Width
          && (
            <div style={{
              gridColumn: '1',
              gridRow: '6',
              marginBottom: '10px',
              width: '228px',
            }}
            >
              <div className="characteristics-title">Width</div>
              <span
                className="fa fa-caret-down"
                style={{
                  color: 'black',
                  height: '20px',
                  marginLeft: `${((this.characteristicBarVal(characteristics.Width.value) / 5) * 100)}%`,
                }}
              />
              <div className="characteristics-bar"></div>

              <div className="characteristics-trait">
                <div className="margin-right">
                  Too narrow
                </div>
                <div className="margin-center">
                  Perfect
                </div>
                <div className="margin-left">
                  Too wide
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

export default ProductBreakdown;


/*
{
  "product_id": "40348",
    "ratings": {
    "3": "1",
      "4": "1"
  },
  "recommended": {
    "true": "2"
  },
  "characteristics": {
    "Size": {
      "id": 135232,
        "value": "4.0000000000000000"
    },
    "Width": {
      "id": 135233,
        "value": "3.5000000000000000"
    },
    "Comfort": {
      "id": 135234,
        "value": "4.0000000000000000"
    },
    "Quality": {
      "id": 135235,
        "value": "3.5000000000000000"
    }
  }
}
*/