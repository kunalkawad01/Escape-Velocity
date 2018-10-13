const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const moment = require('moment')
const Option = require('../models/Options')
const _ = require('lodash')
const util = require('./backtestentryStrike')

router.get('/', (req, res) => {

    const legs = req.query.legs.map(leg => JSON.parse(leg))
    const startDate = moment(legs[0].startDate).format('YYYY-MM-DD')
    const endDate = moment(legs[0].endDate).format('YYYY-MM-DD')

    const OriginalLegs = [...legs]






    //get expiry dates
    let expiryDates = []
    let entryDates = []
    let exitPrices = []
    let promises = []



    Option.find({}).then(data => {


        let expiryDates1 = _.uniq(data.map(option => option.EXPIRY_DT))
        return expiryDates = expiryDates1.filter(date => (date > startDate) && (date < endDate))


    }).then(dates => {


        promises = dates.map(date => Option.find({ $and: [{ EXPIRY_DT: date }, { TIMESTAMP: date }] }))






    }).then(results => {


        Promise.all(promises).then((results) => {
            exitPrices = [].concat.apply([], results)


            mlegs = legs2.map(leg => {

                let dblegs = exitPrices.filter(result => (result.OPTION_TYP === leg.optiontype) && (result.STRIKE_PR === leg.STRIKE - PR) && (result.NEAR_CHECK === true))

                return dblegs.map(dbleg => ({ ...dbleg.toObject(), POSITION_TYP: leg.positiontype }))




            })

            res.send(JSON.stringify({ mlegs }))



















        })

    })
    // }).then(results => {

    //     return legs.map(leg => {

    //         return results.filter(result => (result.OPTION_TYP === leg.optiontype) && (result.STRIKE_RANK === leg.strikeprice))


    //     })


    // }).then(mlegs => { res.json({ mlegs }) })












})//req-res

module.exports = router