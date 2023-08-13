import React from 'react';
import Collapsible from 'react-collapsible';

export default function MISC() {
    return ( 
    <>
    <Collapsible trigger="SCENARIO E 1">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>NA</th>
        <th>K</th>
        <th>Urea</th>
        <th>Creatinine</th>
    </tr>
    <tr>
        <td>22-04-2021</td>
        <td>140</td>
        <td>4.2</td>
        <td>28</td>
        <td>341</td>
    </tr>
    <tr>
        <td>22-04-2022</td>
        <td>140</td>
        <td>4.2</td>
        <td>28</td>
        <td>330</td>
    </tr>
    <tr>
        <td>23-10-2022</td>
        <td>142</td>
        <td>4.1</td>
        <td>35</td>
        <td>353</td>
    </tr>
    <tr>
        <td>20-11-2022</td>
        <td>140</td>
        <td>4.5</td>
        <td>30</td>
        <td>360</td>
    </tr>
    <tr>
        <td>21-11-2022</td>
        <td>145</td>
        <td>4.3</td>
        <td>28</td>
        <td>100</td>
    </tr>
    </table>
    
    <Collapsible trigger="View Additional Resullts">
    <table id="data">
    <tr>
        <th>Date</th>
        <th>Test</th>
        <th>Result</th>
    </tr>
    <tr>
        <td>20-11-2022</td>
        <td>Paracetomol</td>
        <td>219</td>
    </tr>
    <tr>
        <td>20-11-2023</td>
        <td>Alb</td>
        <td>38</td>
    </tr>
    <tr>
        <td>21-11-2023</td>
        <td>Alb</td>
        <td>37</td>
    </tr>
    <tr>
        <td>20-11-2023</td>
        <td>MCV</td>
        <td>93.1</td>
    </tr>
    <tr>
        <td>21-11-2023</td>
        <td>MCV</td>
        <td>93.2</td>
    </tr>
    </table>
    </Collapsible>
    <Collapsible trigger="Clinical Details">
        Paracetomol Overdose
    </Collapsible>
    </Collapsible>
    </>
    )
}